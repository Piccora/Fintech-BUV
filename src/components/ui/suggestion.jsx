import './suggestion.css'


export function suggestion () {
return (
    <>
    <title>Suggestions</title>
    <box>
    <h1>Insights</h1>
    <p>Desc</p>
    </box>
<div class="flex-container">
  <div>
    <h2>Revenue</h2>
    <p>Explain</p>
  </div>
  <form action="submit-form" method="post"/>
                <div class="form-group">
                    <label for="revenue">Input Number</label>
                    <input type="string" id="revenue" name="revenue" required />
                </div>
</div>
<div class="flex-container">
  <div>
    <h2>Profit</h2>
    <p>Explain</p>
  </div>
  <form action="submit-form" method="post"/>
                <div class="form-group">
                    <label for="profit">Input Number</label>
                    <input type="string" id="profit" name="profit" required />
                </div>
</div>
    <box>
    <h1>Conclusion</h1>
    <p>Desc</p>
    </box>

    <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);
    }
        var options = {
          title: 'My Daily Activities',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      
    </script>
  </head>
  <body>
    <div id="donutchart" style="width: 900px; height: 500px;"></div>
  </body>
    </>
)
}