var mensDiscus = {
  r: [58.12, 60.34, 63.59, 63.77, 66.47, 66.45, 66.12, 67.89, 64.73, 67.27, 68.66, 67.86, 68.14, 68.16, 67.66],
  t: ['Rome 1960','Tokyo 1964','Mexico City 1968', 'Munich 1972','Montreal 1976','Moscow 1980','Los Angeles 1984','Seoul 1988','Barcelona 1992','Atlanta 1996','Sydney 2000','Athens 2004','Beijing 2008','London 2012','Rio 2016'],
  mode: 'markers',
  name: 'Trial 1',
  marker: {
    color: 'blue',
    size: 300,
    line: {color: 'blue'},
    opacity: 0.75
  },
  type: 'scatter'
};

var womensDiscus = {
  r: [53.35, 57.15, 56.98, 65.34, 67.71, 68.42, 64.62, 71.31, 68.03, 67.26, 66.44, 66.59, 63.18, 67.57, 67.09],
  t: ['Rome 1960','Tokyo 1964','Mexico City 1968', 'Munich 1972','Montreal 1976','Moscow 1980','Los Angeles 1984','Seoul 1988','Barcelona 1992','Atlanta 1996','Sydney 2000','Athens 2004','Beijing 2008','London 2012','Rio 2016'],
  mode: 'markers',
  name: 'Trial 2',
  marker: {
    color: 'pink',
    size: 300,
    line: {color: 'pink'},
    opacity: 0.75
  },
  type: 'scatter'
};

var discusData = [mensDiscus, womensDiscus];

var layout = {
  width: 900,
  height: 900,
  title: 'Discus Results',
  font: {size: 20},
  plot_bgcolor: '#3d7d00',
  angularaxis: {tickcolor: 'white'},
  hovermode: false,
  radialaxis: {
    visible: true,
    color: 'white',
    range: [50, 75],
  }
};
Plotly.plot('plot1', discusData, layout, align = "center");

var mensShot = {
  r: [19.27, 20.01, 20.25, 21.16, 21.03, 21.16, 21.11, 22.28, 21.2, 21.05, 21.23, 21.02, 21.21, 21.66, 21.89],
  t: ['Rome 1960','Tokyo 1964','Mexico City 1968', 'Munich 1972','Montreal 1976','Moscow 1980','Los Angeles 1984','Seoul 1988','Barcelona 1992','Atlanta 1996','Sydney 2000','Athens 2004','Beijing 2008','London 2012','Rio 2016'],
  mode: 'markers',
  name: 'Trial 1',
  marker: {
    color: 'blue',
    size: 300,
    line: {color: 'blue'},
    opacity: 0.75
  },
  type: 'scatter'
};

var womensShot = {
  r: [16.78, 17.73, 18.86, 20.2, 20.93, 21.68, 20.05, 21.46, 20.44, 19.93, 20.03, 19.57, 19.75, 20.18, 20.31],
  t: ['Rome 1960','Tokyo 1964','Mexico City 1968', 'Munich 1972','Montreal 1976','Moscow 1980','Los Angeles 1984','Seoul 1988','Barcelona 1992','Atlanta 1996','Sydney 2000','Athens 2004','Beijing 2008','London 2012','Rio 2016'],
  mode: 'markers',
  name: 'Trial 2',
  marker: {
    color: 'pink',
    size: 300,
    line: {color: 'pink'},
    opacity: 0.75
  },
  type: 'scatter'
};

var shotputData = [mensShot, womensShot];

var layout = {
  width: 900,
  height: 900,
  title: 'Shot Put Results',
  font: {size: 20},
  plot_bgcolor: '#3d7d00',
  angularaxis: {tickcolor: 'white'},
  hovermode: false,
  radialaxis: {
    visible: true,
    color: 'white',
    range: [16, 23],
  }
};
Plotly.plot('plot2', shotputData, layout, align = "center");