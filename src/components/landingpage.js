import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/90286989_3217711551580747_75068473486606336_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_oc=AQkQ3wqiPX6LG7wsJJ8B8kSS8h2O0EixfxKiSuQKC5yr55-wdSwJx9g_p8wfKdIEcSEiQPhV4_-X8W1NXeo1x7BN&_nc_ht=scontent-iad3-1.xx&oh=dd4c3489a6bb5a1d26ac4cf2a2b73066&oe=5EC007B9"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>



          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>



        <ul>
        <li>
          {/* LinkedIn */}
          <a href="http://google.com">
            <i className="fab fa-linkedin icon"/>
          </a>
          </li>
        <li>  {/* facebook */}
          <a href="http://linked-in.com/khureltogoo-naranzul">
            <i class="fab fa-facebook-f icon" />
          </a>
          </li>
        <li>

          <a href="http://google.com" >
            <i class="fab fa-twitter icon"  />
          </a>
          </li>
        <li>
          <a href="http://google.com" >
            <i class="fab fa-google-plus-g icon" />
          </a>
          </li>
          <li>
          <a href="http://google.com" >
            <i class="fab fa-youtube icon"  />
          </a>
          </li>
</ul>




</div>




  </Cell>

    </Grid>
      </div>
    )
  }
}

export default Landing;
