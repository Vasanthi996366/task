import { Component } from '@angular/core';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.css'
})
export class ExpertiseComponent {
  newsList = [
    {
      imageUrl: 'https://www.trakaid.com/wp-content/uploads/2020/04/how-iot-devices-are-making-home-automation-and-connected-living-a-reality-in-2020.webp',
      title: 'The Top IoT Devices You Need in Your Home',
      description: 'Discover the latest IoT devices that can enhance your home experience.',
      date: '16 JUN 2024',
    },
    {
      imageUrl: 'https://images.ctfassets.net/8cjpn0bwx327/7dqP2JkJ5977qWwds4pvAr/c7196d7c2398fa5f63a6f84ad0a9488f/Industrial_IoT_and_Cloud_Computing_Revolutionizing_the_Manufacturing_Sector.jpg',
      title: 'How IoT is Reshaping the Manufacturing Industry',
      description: 'Learn how IoT technology is transforming manufacturing processes.',
      date: '16 JUN 2024',
    },
    {
      imageUrl: 'https://businessappraisalflorida.com/wp-content/uploads/2022/09/Intellectual-Property-Valuation-scaled.jpeg',
      title: 'What Are the Current Issues Related to Intellectual Property',
      description: 'Explore the latest challenges and solutions in intellectual property management.',
      date: '13 JUN 2024',
    },
  ];


  dotsArray = Array(3).fill(0);

}
