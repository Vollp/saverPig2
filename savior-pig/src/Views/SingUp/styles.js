import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(to bottom, #33ccff 0%, #ccccff 100%);

`;

export const Form = styled.form`
    width: 330px;
    background: #eee;
    padding:55px;
    display: flex;
    flex-direction: column;
    align-items: center;

img {
  width: 200px;
  margin: 10px 0 45px;
  position: relative;
  bottom: 20px;
}

p {
  color: #ff3333;
  margin-bottom: 15px;
  border: 1px solid #ff3333;
  padding: 10px;
  width: 100%;
  text-align: center;
}

input {
  // flex: 1;
  height: 32px;
  margin-bottom: 15px;
  padding: 0 15px;
  color: #777;
  font-size: 15px;
  width: 100%;
  border: 1px solid #ddd;
  position: relative;
  bottom: 25px;
  &::placeholder {
    color: #999;
  }
}

button {
  color: #fff;
  font-size: 16px;
  background: #fc6963;
  height: 30px;
  border: 0;
  border-radius: 12px;
  width: 60%;
}

hr {
  margin: 20px 0;
  border: none;
  border-bottom: 1px solid #cdcdcd;
  width: 100%;
}

a {
  font-size: 16;
  font-weight: bold;
  color: #fc6963;
  text-decoration: none;
}
`;
