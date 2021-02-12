import styled from "styled-components";


export const Container = styled.div`
  /* min-width: 992px; */
  margin: 0 auto;
  max-width: 600px;
  padding-bottom: 30px;

  .min-max {
    color: white;
  }
  hr {
    background: #22c1c3; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #fdbb2d,
      #22c1c3
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #fdbb2d,
      #22c1c3
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    outline: none;
  }
`;

export const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 3em;
  padding-top: 20px;
  padding-bottom: 10px;
`;

export const ResultWeatherForeacast = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  padding: 20px;
  width: 500px;

  h1 {
    color: black;
  }

  .section-top {
    display: flex;
    flex-direction: column;

    .red {
      color: red;
      font-weight: bold;
      margin-left: 200px;
      font-size: 2em;
      cursor: pointer;
    }
    i {
      color: orange;
    }

    .grey {
      color: grey;
    }
    .last-span1 {
      margin-left: 80px;
    }
    .last-span2 {
      margin-left: 63px;
    }

    div {
      padding: 5px;

      span {
      }
    }
  }

  .weekday {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    div {
      text-align: center;
    }

    div div:nth-child(1) {
      margin: 3px;
      background: gray;
      color: white;
    }
    div div:nth-child(2) {
      color: orange;
      span {
        font-weight: bold;
        margin: 3px;
      }
    }
  }

  hr {
    margin: 10px 10px;
  }
`;

export const FormInput = styled.form`
  margin: 20px 50px;
  div {
    /* border: 1px solid; */
    display: flex;
    flex: 1;
    justify-content: center;

    input {
      width: 100%;
      padding: 10px;
      border: none;
      font-size: 1em;
      color: gray;
      outline: none;
    }

    i {
      background: white;
      padding: 15px;
      outline: none;
      cursor: pointer;
    }
  }
`;

export const Grid = styled.div`
  padding: 0 60px;
  margin: 0 auto;
  h2 {
    color: white;
    margin: 20px 0px;
  }
  .grid-template {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;


export const StyledLoading = styled.div`
  margin: 0 auto;
  position: relative;
  top: 300px;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const GridLeftForecast = styled.div`
display: flex;

flex-direction: column;

font-weight: bold;

.min-max {
  span {
    font-size: 0.9em;
  }
}

section {
  margin: 5px;

  span {
    margin: 5px;
  }
}
`;

export const GridRightForecast = styled.div`
display: flex;

flex-direction: column;
font-weight: bold;

.min-max {
  span {
    font-size: 0.9em;
  }
}

section {
  margin: 5px;

  span {
    margin: 5px;
  }
}
`;
