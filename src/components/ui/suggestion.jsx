import './suggestion.css'


export function suggestion () {
return (
    <>
    <title>Suggestions</title>
<h1>Insights</h1>

<p>Desc</p>

<div class="flex-container">
  <div>
    <h2>Revenue</h2>
    <p>Explain</p>
  </div>
  <form action="submit-form" method="post"/>
                <div class="form-group">
                    <label for="revenue"></label>
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
                    <label for="profit"></label>
                    <input type="number" id="profit" name="profit" required />
                </div>
</div>
    </>
)
}