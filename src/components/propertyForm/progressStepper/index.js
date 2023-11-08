import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
// import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import "./index.css";
// import CircularProgress from "react-native-circular-progress-indicator";

const steps = [
  {
    label: "Basic Details",
    description: " Step 1",
  },
  {
    label: "Location Deatils",
    description: " Step 2",
  },
  {
    label: "Property Profile",
    description: " Step 3",
  },
  {
    label: "Photos",
    description: " Step 4",
  },
  {
    label: "Pricing & Others",
    description: " Step 5",
  },
  {
    label: "Amenties",
    description: " Step 6",
  },
];

export default function VerticalLinearStepper(props) {
  const [activeStep, setActiveStep] = React.useState(props.formPageNum - 1);
  return (
    <Box style={{ margin: "4vh" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                {/* <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div> */}
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {/* {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}

      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          justifyContent: "center",
        }}
      >
        <CircularProgress
          variant="determinate"
          value={75}
          sx={{ color: "red" }}
          style={{
            color: "green",
            width: "50px",
            height: "50px",
            borderRadius: "100%",
            boxShadow: "inset 0 0 0px 7.2px grey",
            backgroundColor: "transparent",
            marginTop: "10vh",
          }}
          thickness={5}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="black"
            style={{
              fontFamily: "Nunito",
              textAlign: "center",
              lineHeight: "20.46px",
              fontWeight: 900,
              fontSize: "10px",
              marginLeft: "-16.5vh",
              marginTop: "10vh",
            }}
          >
            75%
          </Typography>
        </Box>
        <div className="heading1">
          <p>Property Score</p>
          <p className="para1">
            Better your property score, greater your visibility{" "}
          </p>
        </div>
      </Box>
    </Box>
  );
}
