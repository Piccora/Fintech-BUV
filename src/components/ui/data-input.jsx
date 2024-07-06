import './data-input.css'

export function form () {
return (
    <>
    <div class="container">
        <div class="box create-account">
            <div class="abc">
            <h2>What is Revenue?</h2>
            <p>Explaination</p>
    
            <h2>What is profit?</h2>
            <p>Explaination</p>
            </div>
            <form action="submit-form" method="post">
                <div class="form-group">
                    <label for="fixed">Fixed Cost:</label>
                    <input type="number" id="fixed" name="fixed" required />
                </div>
                <div class="form-group">
                    <label for="profit">Variable Cost:</label>
                    <input type="number" id="profit" name="profit" required />
                </div>
                <div class="form-group">
                    <label for="price">Price:</label>
                    <input type="number" id="price" name="price" required />
                </div>
                <div class="form-group">
                    <label for="confirm-password">Unit Sold:</label>
                    <input type="number" id="unit-sold" name="unit-sold" required />
                </div>
            </form>
        </div>
    </div>
</>
)
}