import React from 'react'

export const Contact = () => {
  return (
    <div className="Full-Body w-full">
    <div className="image-container">
    </div>
    <div className=" flex ">
      <li><img src="" alt="" /> PHOTO</li>
      <div>
        <h1>Get In touch today</h1>
        <p>Keep in touch with us!</p>
        <div className="flex">
          <ul>
            <div className=" flex">
              <li>
                <div>
                  Name
                </div>
                <input type="text" placeholder="John Carter" />
              </li>
              <li>
                <div>
                  Email
                </div>
                <input type="email" placeholder="example@gmail.com" />
              </li>
            </div>
            <div className="flex">
              <li>
                <div>
                  Phone
                </div>
                <input type="text" placeholder="(123) 456 - 789" />
              </li>
              <li>
                <div>
                  Company
                </div>
                <input type="text" placeholder="Facebook" />
              </li>
            </div>
            <li>
              <div>
                Message
              </div>
              <input type="paragraph" placeholder="Please type your message here..." />
            </li>
            <li>
              <div>
                Send Message
              </div>
              <input type="file" placeholder="Plea*se type your message here..." />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>Our Social Media</div>
    <ul className="flex gap-2">
      <a href="link"></a>
    </ul>
  </div>
  )
}
