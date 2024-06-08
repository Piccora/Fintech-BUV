export function homepage() {
return (
<html lang="en">
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <head>
    <title>Title</title>
    <div class="box1">
        <h1>About Us</h1>
        <p>Desc</p>
    </div>

    <div class="box2">
        <h1>Our Product</h1>
        <p>Desc</p>
    </div>
    <div class="box3">
        <h1>Our Team Members</h1>
        <p>This is Our Team Members:</p>
        <div class="image-bubble-container">
                <div class="image-bubble">
                    <image src="link1" alt="Member 1" />
                    <p>Nguyen Quynh Anh</p>
                </div>
                <div class="image-bubble">
                    <image src="link2" alt="Member 2"/>
                    <p>Vu Duy Minh</p>
                </div>
                <div class="image-bubble">
                    <image src="link3" alt="Member 3"/>
                    <p>Ta Tuan Minh</p>
                </div>
                <div class="image-bubble">
                    <image src="link4" alt="Member 4"/>
                    <p>Le The Hien</p>
                </div>
            </div>
    </div>
    <div class="box4">
        <h1>Our Vision</h1>
        <p>Desc</p>
    </div>
  </head>
  </html>
  )
  }