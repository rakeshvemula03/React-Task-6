import { Component } from "react";
import "./portfolio.css";

class portfolio extends Component {
  render() {
    const imageUrl = process.env.PUBLIC_URL + "/My Image.jpg";
    return (
      <div class="container">
        <center>
          <h1 class="bg-dark text-light m-1 mb-0">My Portfolio</h1>
        </center>
        <div class="row mt-0">
          <div class="col-md-4">
            <img
              src={imageUrl}
              alt="Me"
              class="img-fluid rounded border border-info p-2 w-80 mt-5 slide-in "
            />
          </div>
          <div class="col-md-8">
            <div class="jumbotron jumbotron-fluid mt-5 bg-secondary border rounded">
              <div class="container1 border border-secondary rounded">
                <h3 class="p-2">About Me</h3>
                <p class="p-2 one">
                  Iam Rakesh Vemula.I am currently pursuing B.Tech 3rd year in
                  VIT AP University. I have been learning coding. I am good at
                  Java,Python,SQL as I am still studying I don't have any
                  experience in jobs but I am very passionate about earning
                  money and being independent.{" "}
                </p>
              </div>
            </div>

            <div class="jumbotron jumbotron-fluid mt-1 bg-secondary border rounded">
              <div class="container1 border border-secondary rounded">
                <h3 class="p-2">Skills</h3>
                <p class="p-1 one">
                  <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Java</li>
                    <li>
                      Communication,Teamwork,Hardworking,Focused and Balanced
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div class="jumbotron jumbotron-fluid mt-1 bg-secondary border rounded">
              <div class="container1 border border-secondary rounded">
                <h3 class="p-2">Hobbies</h3>
                <p class="p-1 one">
                  <ul>
                    <li>Reading Books</li>
                    <li>Painting,Art</li>
                    <li>Gaming</li>
                  </ul>
                </p>
              </div>
            </div>

            <div class="jumbotron jumbotron-fluid mt-1 bg-secondary border rounded">
              <div class="container1 border border-secondary rounded">
                <h3 class="p-2">
                  Contact Me:{" "}
                  <a href="mailto:vemularakesh2003@gmail.com">Email</a>{" "}
                  <a href="LinkedInProfile">LinkedIn</a> +91 9398213086
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default portfolio;
