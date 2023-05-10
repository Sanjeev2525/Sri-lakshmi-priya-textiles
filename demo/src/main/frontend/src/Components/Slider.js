import Carousel from 'nuka-carousel';

import './slider.css'

const Slider = () => {
    const slides = [
        'https://img.freepik.com/free-psd/several-white-cushions-closeup_176382-1007.jpg?w=1060&t=st=1679589714~exp=1679590314~hmac=b6094548c357f094fd19a0bec4eeada62996bcf7d8e5d9db8175b59fcea570dc\'',
        'https://img.freepik.com/free-vector/realistic-icon-with-black-white-ornamental-carpet-floor-vector-illustration_1284-66915.jpg?w=1060&t=st=1679589921~exp=1679590521~hmac=e6ba279959e1dc232747b8b1053671a77f3a97286685ed4d0b7d362416a66617',
        'https://i0.wp.com/gowrishop.com/wp-content/uploads/2023/01/1000009582.jpg?fit=2500%2C1204&ssl=1\'',
        'https://img.freepik.com/free-psd/elegant-bedroom-hotel-room-with-classic-furniture_176382-189.jpg?w=1060&t=st=1679589994~exp=1679590594~hmac=22446dea7afdd7fce72ff29509bcbe8fdc2673b07022df55829f1a77ee16817e'
    ]

    const params = {
        wrapAround: true,
        animation: 'zoom',
        slidesToShow: 1,
    }

    return (
        <div>
            <Carousel {...params}>
                {slides.map((slide) => (
                    <img src={slide} key={slide} alt="Carouel element"/>
                ))}
            </Carousel>
        </div>
    )
}

export default Slider;