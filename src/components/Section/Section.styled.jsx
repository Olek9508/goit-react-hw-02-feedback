import styled from "@emotion/styled";

export const TitleStyle = styled.h2`
  animation: pulsate 1.5s infinite alternate;  
  padding: 0.4em;
  box-shadow: 0 0 .2rem #348400,
            0 0 .2rem #348400,
            0 0 2rem #348400,
            0 0 0.8rem #348400,
            0 0 2.8rem #348400,
}

@keyframes pulsate {
    
  100% {

      text-shadow:
      0 0 4px #348400,
      0 0 11px #348400,
      0 0 19px #348400,
      0 0 40px #348400,
      0 0 80px #348400,
      0 0 90px #348400,
      0 0 100px #348400,
      0 0 150px #348400;
  
  }
  
  0% {

    text-shadow:
    0 0 2px #348400,
    0 0 4px #348400,
    0 0 6px #348400,
    0 0 10px #348400,
    0 0 45px #348400,
    0 0 55px #348400,
    0 0 70px #348400,
    0 0 80px #348400;

}
`;

