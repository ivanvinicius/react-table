import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 5px;
  overflow: hidden;

  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0.15);
`;

export const ControlsArea = styled.div`
  width: 100%;
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  flex-direction: row;
  margin: 10px 0;

  input {
    height: 38px;
    padding: 2px;
    border: none;
    border-bottom: 1px solid #009879;
  }
`;

export const ButtonsArea = styled.div`
  width: 30%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: row;

  button {
    width: 10%;
    height: 38px;
    margin: 0 4px;
    padding: 6px;

    border: 0;
    background-color: #009879;
    font-weight: bold;
    color: #fff;

    border-radius: 5px;
    transition: background-color 0.4s ease;

    &:hover {
      background-color: #5db951;
    }

    &:disabled {
      font-weight: normal;
      color: #333;
      background-color: #dddddd;
      border: 1px solid #999;
    }
  }
`;

export const TableContainer = styled.table`
  border-collapse: collapse;

  min-width: 1000px;
  overflow: hidden;

  thead tr {
    background-color: #009879;
    color: #fff;
    text-align: left;
    font-weight: bold;
  }

  th,
  td {
    padding: 12px 15px;
  }

  tbody {
    background-color: #fff;
  }

  tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  tbody tr:hover {
    color: #009879;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }
`;

export const ActionsArea = styled.div`
  width: 100%;
  padding: 0 10px;
  margin: 10px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Infos = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;

  font-size: 13px;
  color: #999;
`;
