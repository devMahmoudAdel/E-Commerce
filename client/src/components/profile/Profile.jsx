import "./profile.css"
function Profile() {
  return (
    <div id="wrapper">
      <div id="header">
        <div id="nav">
          <a href="index.html">Home</a> | <a href="#">About Me</a> |{" "}
          <a href="#">Hire Me</a> | <a href="#">My Portfolio</a>
        </div>
        <div id="bg"></div>
      </div>

      <div id="main-content">
        <div id="left-column">
          <div id="logo">Welcome to Bashir Korede's Profile Page</div>
          <div class="box">
            <h1>What You'll Find Here</h1>
            <p>This is my space. Here are some of my interests: </p>
            <ul style="margin-top:10px;">
              <li>Praying</li>
              <li>Writing cool codes</li>
              <li>Playing GTA</li>
              <li>Wearing jeans lol</li>
              <li>React Native</li>
            </ul>
          </div>
          <h2>Some Of My Famous Quotes</h2>
          <p>
            <img
              src="https://web.facebook.com/photo.php?fbid=1441894042538268&set=a.105978852796467.9483.100001530585485&type=3&theater
"
              width="139"
              height="150"
              style="margin: 0 10px 10px 0;float:left;"
            />
            <em>"Do It, Do It Right, Do It Right Now"</em> - Me
            <br />
            <em>
              "Would I rather be feared or loved? Easy, both. I want people to
              be afraid of how much they love me."
            </em>{" "}
            - Me
            <br />
            <em>
              "Make the world more open, and enjoy an open and connected world"
            </em>{" "}
            - Me
            <br />
            <em>
              "Don't Learn to patch bugs out, learn to rewrite them, and fix
              them"
            </em>{" "}
            - Me
            <br />
          </p>
        </div>
        <div id="right-column">
          <div id="main-image">
            <img
              src="https://web.facebook.com/photo.php?fbid=1441894042538268&set=a.105978852796467.9483.100001530585485&type=3&theater
"
              width="160"
              height="188"
            />
          </div>
          <div class="sidebar">
            <h3>Few Stuffs About Me</h3>
            <p>
              My name is Bashir Korede. And I love eating and drinking code, I
              am the Circle Lead for{" "}
              <a
                href="https://web.facebook.com/groups/DevCAdoEkiti"
                target="_blank"
              >
                Facebook Developer Circle: Ado-Ekiti.
              </a>
            </p>
            <h3>Find Me Elsewhere</h3>
            <div class="box">
              <ul>
                <li>
                  <a
                    href="http://facebook.com/Mr.Bashir.Korede"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="http://twitter.com/khoeblaze" target="_blank">
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="http://linkedin.com/in/bashir-korede"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="http://github.com/bashirk" target="_blank">
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <em id="randomquote"></em>
      <div id="footer">
        Copyright &copy; 2017 Bashir Korede. All rights reserved.
        <br />
        Mini webpage project designed for{" "}
        <a href="http://flexisaf.com" target="_blank">
          FlexiSAF EduSoft Limited
        </a>
        's FIP project
      </div>
    </div>
  );
}

export default Profile;
