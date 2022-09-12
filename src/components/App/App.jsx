import { Container, Section } from "./App.styled";
import { Stats } from "components/Statistic/Statistic";
// import { FeedbackOptions } from "components/Feeedback/FeedbackOptions";
import { Component } from "react";

export class App extends Component{
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  }
  
  render() {
    return (
      <Container>
      <Section title = "Feedback statisctisc">
        <Stats good={0} neutral={0} bad={0} total={0} positivePercentage={0} />
      </Section>
      </Container>
    );
  }

};
