import React from "react";
import { Grid, Card, Avatar,CardContent, Typography } from "@material-ui/core";


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      students: []
    }
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2")
      .then(res => res.json())
      .then(users => { this.setState({ students: users.data }) });
  }

  render() {
    return (


      <div style={{ paddingTop: "2px" }} >
        {
          this.state.students.map((data, i) => (
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item xs spacing={2} >
                        <Typography  ><b>{data.first_name} {data.last_name}</b></Typography>
                        <Typography>{data.email}</Typography>
                      </Grid>
                      <div style={{ paddingRight: "50px", paddingTop: "15px" }} >
                        <Grid item >
                          <Avatar src={data.avatar}></Avatar>
                        </Grid>
                      </div>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          ))}
      </div>
    );
  }
}
