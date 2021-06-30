import React, {Suspense, useEffect, useState} from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import {getRequest} from "../utils/ApiService";
import {Card, CardContent} from "@material-ui/core";
import Image from 'material-ui-image';

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

// const ImageM = styled(Image)`
//     max-width:100%;
//     max-height:150px;
// `;

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

    // https://material-ui.com/customization/breakpoints/#breakpoints
    const responsiveSettings = {
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        // slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
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
        <Card>
            <CardContent>
                <h2> Responsive </h2>
                <StyledSlider {...responsiveSettings}>
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
            </CardContent>
        </Card>
    );
}
export default BookSlider;
