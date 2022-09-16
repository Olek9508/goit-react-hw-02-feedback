import { Component } from "react";
import { Section } from "components/Section/Section";
import { Notification } from "components/Notification/Notification";
import { Statistics } from "../Statistic/Statistic";
import { FeedbackOptions } from "../Feeedback/FeedbackOptions"
import { Container, InnerContainer } from "./App.styled";

export class App extends Component{
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  }

  onHandleClick = (key) => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1
      }
    })
  }
    

  countTotalFeedback(){
      const object = this.state;
        return Object.values(object).reduce(
        (total, item) => total + item, 0
    );
  }

  countPositiveFeedbackPercentage() {
    const totalAmount = this.countTotalFeedback();
    return Math.round((this.state.good/totalAmount) *100) + "%";
  };
  
    render() {
      const { good, neutral, bad } = this.state;
        
      return (
        <Container>
          <InnerContainer>
            <Section title="Please leave your feedback">
              <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onHandleClick}                   
              />
            </Section>

            <Section title="Statistics">
              {this.countTotalFeedback() > 0 ?( <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={ this.countTotalFeedback()}
              positiveFeedbackPercentage = {this.countPositiveFeedbackPercentage()}
              />)
              : (<Notification message="There is no feedback"/>)
            }
              </Section>
          </InnerContainer>
          </Container>
        )
    }
};
