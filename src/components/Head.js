import React from 'react'
import styled from 'styled-components'

const Head = () => {
  return (
    <>
        <HeadBody>
            <HeadLeft>
                <ul>
                    <li><i className="fa-solid fa-phone"></i> +8890654890</li>
                    <li><i className="fa-solid fa-envelope"></i> adithyahere@gmail.com</li>
                </ul>
            </HeadLeft>

            <HeadRight>
                <ul>
                    <li>FAQ's</li>
                    <li>Need Help</li>
                    <li><i className="fa-solid fa-flag-checkered"></i> IND</li>
                    <li><i className="fa-solid fa-flag-usa"></i> USD</li>
                </ul>
            </HeadRight>
        </HeadBody>
    </>
  )
}

export default Head

const HeadBody = styled.div`
    height: 6vh;
    padding: 0 5%;
    background-color: var(--head-color);
    color: #fff;
    font-family: var(--font);
    font-size: 0.9375rem;
    display: flex;
    justify-content: space-between;
    align-items: center ;

    /* border: 2px solid red; */

    @media screen and (max-width: 767px){
        display:none;
    }
`

const HeadLeft = styled.div`
    ul{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`

const HeadRight = styled.div`
    width: 30%;

    ul{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
`