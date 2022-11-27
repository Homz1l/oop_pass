import React, { Component } from 'react';
import {parse} from 'papaparse';
class Main1 extends Component {
      componentDidMount() {
        parse("http://localhost:5000/", {
            download: true,
            header : true ,
            complete : (e) => {
                console.log(e);
                this.setData(e.data);
            }
        })
    }
    
    render() {
      <div>
      {this.setData(e.data)}
    </div>
    }
}
export default main1;