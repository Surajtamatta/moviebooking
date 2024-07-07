import styled from "styled-components";

export const Content = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    position: relative;
    img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the image covers the entire grid item */
    object-position: center; /* Center the image within the grid item */
    display: block; /* Ensure image is block-level element for proper spacing */
  }

`
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px,1fr)); 
  grid-gap: 10px; 
  justify-items: center; 
  align-items: center; 
  width: 100%;
  height: 100%;
  position: relative;
  padding: 10px;
 
`

export const Rating = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    width:100%;
    bottom: 0;
    max-height:30px;
    height:100%;
    padding: 0 10px;
    position: absolute;
    color: #f8fbfe;
    border-radius: 0 0 10px 10px;
    background: #000000;
`

export const MetaData = styled.div`
  display:flex;
  flex-direction: column;
  justify-items: flex-start; 
  align-items:flex-start; 
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0;
  margin-top: 10px;

 
`