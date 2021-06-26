import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import {getRequest} from "../utils/ApiService";
import CssBaseline from "@material-ui/core/CssBaseline";

const Container = styled.div`
  // overflow:hidden;
`;

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
    }
`;
const ImageContainer = styled.div`
  margin: 0 16px;
`;

const Image = styled.img`
    max-width:100%;
    max-height:200px;
`;

const books = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const BookSlider = () => {
    const [bookList, setBookList] = useState([]);

    const getData = async () => {
        const [data, dataError] = await getRequest('https://picsum.photos/v2/list', null);
        console.log('data', data);
        setBookList(data);
    };

    useEffect(() => {
        getData();
    }, []);


    const simpleSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const responsiveSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const multipleSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };

    return (
        <Container>
            <h2> Responsive </h2>
            <StyledSlider {...multipleSettings}>
                {bookList.map((book, index) => {
                    return (
                        <div key={index}>
                            <ImageContainer>
                                <Image src={book.download_url}/>
                            </ImageContainer>
                        </div>
                    );
                })}
            </StyledSlider>
        </Container>
    );
}
export default BookSlider;