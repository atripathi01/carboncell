import { Box, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import Chart, { ChartData, ChartOptions, Scale } from 'chart.js/auto'; // Import Chart.js
import { getCryptocurrencyPrices, getPopulationData } from '../apis/trackerApi';
import { Bpi, PopulationData } from '../apis/types';
import { CurrencyBitcoin } from '@mui/icons-material';

const Home: React.FC = () => {
  const [data, setData] = useState<PopulationData[]>([]);
  const [bitcoinData, setBitcoinData] = useState<Bpi>({});
  useEffect(() => {
    try {
      getPopulationData().then((res) => {
        console.log(res);
        //@ts-ignore
        setData(res?.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  useEffect(() => {
    try {
      getCryptocurrencyPrices().then((res) => {
        console.log(res);
        //@ts-ignore
        setBitcoinData(res?.bpi);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const chartRef = useRef<HTMLCanvasElement>(null); // Ref for chart instance

  useEffect(() => {
    if (chartRef.current !== null) {
      const chartInstance = new Chart(chartRef.current, {
        type: 'line',
        //@ts-ignore
        data: {},
        options: {},
      });
      //@ts-ignore
      chartRef.current.chartInstance = chartInstance;
    }

    return () => {
      if (chartRef.current !== null) {
        //@ts-ignore
        if (chartRef.current.chartInstance !== undefined) {
          //@ts-ignore
          chartRef.current.chartInstance.destroy();
        }
      }
    };
  }, []);

  useEffect(() => {
    if (chartRef.current !== null && data.length > 0) {
      //@ts-ignore
      const chartInstance = chartRef.current.chartInstance;

      // Extracting years and population from the data
      const years = data.map((entry) => entry.Year);
      const populations = data.map((entry) => entry.Population);

      // Configuring data for Chart.js
      const chartData: ChartData = {
        labels: years,
        datasets: [
          {
            label: 'Population',
            //@ts-ignore
            data: populations,
            fill: false,
            borderColor: 'rgba(0,255,12,1)',
            tension: 0.1,
          },
        ],
      };

      // Configuring options for Chart.js
      const chartOptions: ChartOptions = {
        scales: {
          y: {
            //@ts-ignore
            type: 'linear' as Scale, // Specify the type as Scale
            ticks: {
              //@ts-ignore
              beginAtZero: true,
            },
          },
        },
      };

      // Update chart data and options
      chartInstance.data = chartData;
      chartInstance.options = chartOptions;
      chartInstance.update();
    }
  }, [data]);

  //@ts-ignore
  const CryptoCard = ({ currency, data }) => {
    console.log(data);

    return (
      <Box sx={{ p: 1 }}>
        <div className='background_box'>
          <div className='cardPadding'>
            <Typography sx={{ fontSize: '24px' }}>
              <span>
                <CurrencyBitcoin sx={{ color: 'rgba(0,255,12,1)', mr: 1 }} />
              </span>
              {currency}
            </Typography>
            <p className='desx'>{data?.description}</p>
            <p className='rate'>
              Rate: <span className='active'>{data?.rate}</span>
            </p>
          </div>
        </div>
      </Box>
    );
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} className='header_container'>
          <div>
            <Typography sx={{ fontWeight: '400', fontSize: '24px' }}>
              Hello, <span className='gradientText'>Ayush Tripathi 👋</span>
            </Typography>
            <Typography sx={{ fontSize: '18px' }}>
              Welcome to{' '}
              <span style={{ color: 'rgba(0,255,12,1)' }}>Spot trading!</span>
            </Typography>
          </div>
          <button className='button'>Start Trading</button>
        </Grid>
        <Grid item xs={12} md={12} lg={7}>
          <div className='background_box'>
            <Box sx={{ padding: { xs: '5px', lg: '25px' } }}>
              <Typography sx={{ fontSize: '18px' }}>
                Population Data Graph
              </Typography>
              <Divider sx={{ mb: 3, opacity: 0.6, background: '#fff' }} />
              <canvas ref={chartRef}></canvas> {/* Render chart */}
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={5}>
          <div className='background_box'>
            <Box sx={{ padding: { xs: '5px', lg: '25px' } }}>
              <Typography sx={{ fontSize: '18px' }}>MetaMask Wallet</Typography>
              <Divider sx={{ mb: 3, opacity: 0.6, background: '#fff' }} />
              <Typography sx={{ fontSize: '18px' }}>Coming Soon...</Typography>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className='background_box'>
            <Box sx={{ padding: { xs: '5px', lg: '25px' } }}>
              <Typography sx={{ fontSize: '18px' }}>
                Cryptocurrency Prices
              </Typography>
              <Divider sx={{ mb: 3, opacity: 0.6, background: '#fff' }} />
              {bitcoinData && (
                <Grid container xs={12}>
                  <Grid item xs={12} lg={4}>
                    <CryptoCard currency='USD' data={bitcoinData.USD} />
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <CryptoCard currency='GBP' data={bitcoinData.GBP} />
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <CryptoCard currency='EUR' data={bitcoinData.EUR} />
                  </Grid>
                </Grid>
              )}
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
