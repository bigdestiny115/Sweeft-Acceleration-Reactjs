import styled from "styled-components";

// for main and history page

export const MainPageStyle = styled.div`
  margin: 40px 0 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;

  .card {
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
    height: 300px;
    object-fit: cover;

    &:hover {
      box-shadow: 0px 0px 12px #D9ABFF;
    }

    h1 {
      position: absolute;
      left: 50%;
      top: 80%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: 100%;
      font-size: 20px;
      font-weight: bold;
      color: #DFDFDF;
      text-transform: capitalize;
      background-color: rgba(33, 33, 33, 0.7);
      z-index: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.4s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

// laoding
export const Loading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 38px;
  color: #DFDFDF;
  background-color: rgba(33, 33, 33, 0.7);
  z-index: 999;
`;

// for CardModal

export const CardModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  color: black;
  z-index: 55;

  width: 800px;
  height: 550px;
  background-color: #DFDFDF;
  border-radius: 10px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  @media screen and (max-width: 820px) {
      width: 600px;
    }
    @media screen and (max-width: 640px) {
      width: 400px;
      flex-direction: column;
      padding: 8px;
    }
    @media screen and (max-width: 576px) {
      max-width: 370px;
      width: 95%;
    }

  .details {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding-left: 4px;

    p {
      font-size: 22px;
      margin-block: 4px;
      @media screen and (max-width: 820px) {
      font-size: 16px;
    }
    }
  }

  img {
    max-width: 600px;
    width: 50%;
    height: 100%;
    object-fit: cover;
    transition: width 0.5s ease;
    @media screen and (max-width: 820px) {
      width: 60%;
    }
  }

  .icon {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: #5E5E5E;
    }
  }
`;

// styles for overlay

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 50;
`;

// for history Page container

export const HistoryStyle = styled.div`
  margin: 160px 0 80px 30px;
  max-width: fit-content;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  select {
    margin-top: 4px;
    border-radius: 8px;
    padding: 10px;
    border: 1px solid #ccc;
    color: #333333;
    font-size: 16px;
    font-weight: bold;
  }

  h1 {
    color: #ffffff;
  }
`;
