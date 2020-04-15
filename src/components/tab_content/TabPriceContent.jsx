import React from "react";
import { Button } from "../Button";
import styled from "styled-components";
import { cross } from "react-icons-kit/icomoon/cross";
import { checkmark } from "react-icons-kit/icomoon/checkmark";
import Icon from "react-icons-kit";

const TabPriceContent = () => {
  return (
    <TabContiner>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{ fontSize: "1.5rem" }}>
            Choose one plan and watch everything on Netflix.
          </span>
          <Button className="btn">try it now</Button>
        </div>
        <div className="tab-bottom-content">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Basic</th>
                <th>Standard</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly price</td>
                <td>$9.99</td>
                <td>$13.99</td>
                <td>$16.99</td>
              </tr>
              <tr>
                <td>HD available</td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Ultra HD available</td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Screens you can watch on at the same time</td>
                <td>1</td>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Watch on your laptop, TV, phone and tablet</td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Unlimited movies and TV shows</td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Cancel anytime</td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </TabContiner>
  );
};

export default TabPriceContent;

const TabContiner = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
  }

  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-item: center;
    padding: 2.5rem 0;
  }

  span {
    grid-column: 3 / 9;
  }

  .btn {
    margin: 0 1.25rem 1.25rem;
    grid-column: 10 / 12;
  }

  .tab-bottom-content {
    margin: 2rem auto;
  }

  table {
    width: 100%;
    margin-top: 2rem;
    border-collapse: collapse;
  }

  table thead th {
    text-transform: uppercase;
    padding: 0.8rem;
  }

  table tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }

  table tbody tr td {
    color: #999;
    padding: 0.8rem 1.2rem;
    text-align: center;
  }

  table tbody tr td:first-child {
    text-align: left;
  }

  table tbody tr:nth-child(even) {
    background: #222;
  }
`;
