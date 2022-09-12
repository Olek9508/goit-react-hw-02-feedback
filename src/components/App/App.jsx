import { Container, Section } from "./App.styled";
import { Statistics } from "components/Statistic/Statistic";

export const App = () => {
  return (
    <Container>
    <Section title = "Feedback statisctisc">
      <Statistics good={0} neutral={0} bad={0} total={0} positivePercentage={0} />
    </Section>
    </Container>
      );
};
