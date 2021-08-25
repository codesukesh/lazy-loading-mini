import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as ApexCharts from 'apexcharts';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  image = "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1133605325-scaled-e1617227898456.jpg?fit=696,463";
  image1 = "https://wallpaperbat.com/img/270575-cute-kitty-wallpaper.jpg";
  image2 = "https://wallpaperbat.com/img/179287-cat-wallpaper.jpg";
  image3 = "https://wallpaperbat.com/img/122809-free-wallpaper-free-animal-wallpaper-cat-widescreen-1-wallpaper-2560x1600.jpg";
  image4 = "https://wallpaperbat.com/img/77200-free-download-kittens-wallpaper-cats-animals-wallpaper-1600-1200-320jpg-1600x1200-for-your-desktop-mobile-tablet-explore-free-wallpaper-of-kittens-kitten-wallpaper-free-download-free-cat-wallpaper.jpg";
  image5 = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chihuahua-dog-running-across-grass-royalty-free-image-1580743445.jpg?crop=0.446xw:1.00xh;0.254xw,0&resize=480:*"

  images = [
    "https://cdn-cafdl.nitrocdn.com/fQHdfFSxWCuDmbpNBOTabVcchzVvBqxc/assets/static/optimized/rev-55c094e/blog/wp-content/uploads/2014/07/Chihuahua.jpg",
    "https://i.pinimg.com/550x/86/f7/b6/86f7b64867b70fff28f02cdecce34bdb.jpg",
    "https://cdn.pixabay.com/photo/2019/07/30/05/53/dog-4372036__340.jpg",
    "https://www.hindisoch.com/wp-content/uploads/2019/11/Baby-White-Puppy-Dog-Cute-Pet-Dog-Puppy-Dog-Image.jpg",
    "https://www.hindisoch.com/wp-content/uploads/2019/11/Small-Dog-Playing-Pet-Hanging-Playing-Photo-Image.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNbTcZfi4CE0WkEMnJVXe6ITe2z2xUbqk6CxVRDHUPNE-nGWVBbaCO0osYmz-vofck0nQ&usqp=CAU",
    "https://cdn-cbeko.nitrocdn.com/YAysSGytvxeVxHWdRPueSoYmAixjAhdB/assets/static/optimized/rev-4a7d271/wp-content/uploads/2013/09/cat-at-window-greece.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juvenile_Ragdoll.jpg/220px-Juvenile_Ragdoll.jpg",
    "https://cdn-cafdl.nitrocdn.com/fQHdfFSxWCuDmbpNBOTabVcchzVvBqxc/assets/static/optimized/rev-55c094e/blog/wp-content/uploads/2014/07/Chihuahua.jpg",
    "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1133605325-scaled-e1617227898456.jpg?fit=696,463",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chihuahua-dog-running-across-grass-royalty-free-image-1580743445.jpg?crop=0.446xw:1.00xh;0.254xw,0&resize=480:*",
    "https://pagedart.com/images/how-to-optimize-images-for-websites/kitten-jpg-vs-png.png",
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {


  }

  ngAfterViewInit() {
    // var ctx = (<HTMLCanvasElement>document.getElementById('myChart')).getContext('2d');
    // var myChart = new Chart(ctx, {
    //   type: 'bar',
    //   data: {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: [12, 19, 3, 5, 2, 3],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(255, 206, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(153, 102, 255, 0.2)',
    //         'rgba(255, 159, 64, 0.2)'
    //       ],
    //       borderColor: [
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(75, 192, 192, 1)',
    //         'rgba(153, 102, 255, 1)',
    //         'rgba(255, 159, 64, 1)'
    //       ],
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true
    //       }
    //     }
    //   }
    // });
    var options = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    }

    var options2 = {
      chart: {
        type: 'pie'
      },
      series: [44, 55, 13, 33],
      labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
    }

    var chart = new ApexCharts(document.querySelector("#myChart"), options);
    var chart2 = new ApexCharts(document.querySelector("#myChart2"), options2);

    chart.render();
    chart2.render();
  }

  navigate() {

    this.router.navigate(['/next']);
  }

}
