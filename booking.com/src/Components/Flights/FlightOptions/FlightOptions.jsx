import React from "react";
import "./FlightOptions.css";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import FlightSearchBar from "../FlightSearchBar";
import FlightOptionSlider from "./FlightOptionSlider";
import { FlightTime } from "./FlightTime";
import SmallFooter from "../../Footer/SmallFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import FlightData from "../../DataComponents/FlightData";

const FlightOptions = () => {
  return (
    <Box>
      <Navbar />
      <div
        style={{
          width: "100%",
          height: "15rem",
          margin: "auto",
          backgroundColor: "#F5F5F5",
        }}
      >
        <div style={{ width: "90%", padding: "2rem", margin: "auto" }}>
          <FlightSearchBar />
        </div>
      </div>

      <Box w="79%" m="auto" h="auto" pb={"2rem"}>
        <Flex>
          {/* first box */}

          <Box w="45%" h="auto">
            <Box pl="10px" pt="30px">
              <Text fontSize="xl" fontWeight="650">
                Filters
              </Text>
              <Text as="sup" color="#8c8983" fontSize="14px">
                Showing 15 results
              </Text>
              <Text fontSize="md" fontWeight="650" pt="20px">
                Stops
              </Text>

              {/* Stope filter */}
              <Stack gap={2} mt="10px">
                <RadioGroup defaultValue="any">
                  <Flex justifyContent="space-between">
                    <Radio size="lg" colorScheme="blue" value="any">
                      Any
                      <Text color="#8c8983" fontSize="sm">
                        From INR11,359.31
                      </Text>
                    </Radio>
                    <Text pr="30px" color="#8c8983" fontSize="sm">
                      15
                    </Text>
                  </Flex>
                  <Flex justifyContent="space-between">
                    <Radio size="lg" colorScheme="blue" value="direct">
                      Direct only
                      <Text color="#8c8983" fontSize="sm">
                        From INR11,359.31
                      </Text>
                    </Radio>
                    <Text pr="30px" color="#8c8983" fontSize="sm">
                      4
                    </Text>
                  </Flex>
                  <Flex justifyContent="space-between">
                    <Radio size="lg" colorScheme="blue" value="stop">
                      1 stop max
                      <Text color="#8c8983" fontSize="sm">
                        From INR11,359.31
                      </Text>
                    </Radio>
                    <Text pr="30px" color="#8c8983" fontSize="sm">
                      11
                    </Text>
                  </Flex>
                </RadioGroup>
              </Stack>
              {/* duration */}

              <Text fontSize="md" fontWeight="650" pt="20px">
                Duration
              </Text>
              <Text fontSize="sm" fontWeight="500" color="#5b6770">
                Maximum travel time
              </Text>
              <Text as="sup" color="#8c8983" fontSize="12px">
                27 hours
              </Text>
              <Box w="90%">
                <FlightOptionSlider />
              </Box>

              <Text fontSize="md" fontWeight="650" pt="20px">
                Flight times
              </Text>

              <Box w="90%">
                <FlightTime />{" "}
              </Box>

              <Text fontSize="md" fontWeight="650" pt="20px">
                Airlines
              </Text>
              <Box>
                {" "}
                <VStack alignItems="flex-start">
                  <Checkbox colorScheme="blue" mt="10px" defaultChecked>
                    Air India
                  </Checkbox>
                  <Checkbox colorScheme="blue" defaultChecked>
                    Go First
                  </Checkbox>
                  <Checkbox colorScheme="blue" defaultChecked>
                    IndiGo
                  </Checkbox>
                  <Checkbox colorScheme="blue" defaultChecked>
                    Vistara
                  </Checkbox>
                </VStack>
              </Box>
            </Box>
          </Box>

          {/* Second box */}

          <div className="FlightListdata">
            {FlightData.map((el) => {
              return (
                <div className="Subdivdata">
                  <div className="timedataofFlight">
                    <div className="firstTimediv">
                      <div className="divImgPTag">
                        <img
                          style={{ width: "40px", hieght: "40px" }}
                          src={el.firstImg}
                          alt=""
                        />
                        <p>{el.firstflight}</p>
                      </div>
                      <div>
                        <p style={{ fontWeight: "700" }}>{el.firstSTime}</p>
                        <p>PNQ {el.Fpnrno}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: "13px" }}>{el.FHours}</p>
                        <hr style={{ width: '"auto' }} />
                        <p style={{ fontSize: "13px" }}>Direct</p>
                      </div>
                      <div>
                        <p style={{ fontWeight: "700" }}>{el.firstETime}</p>
                        <p>PNQ {el.Fpnrno}</p>
                      </div>
                    </div>
                    <div className="firstTimediv">
                      <div className="divImgPTag">
                        <img
                          style={{ width: "40px", hieght: "40px" }}
                          src="https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                          alt=""
                        />
                        <p>{el.secondflight}</p>
                      </div>
                      <div>
                        <p style={{ fontWeight: "700" }}>{el.secondSTime}</p>
                        <p>PNQ {el.Spnrno}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: "13px" }}>{el.secondSTime}</p>
                        <hr />
                        <p style={{ fontSize: "13px" }}>Direct</p>
                      </div>
                      <div>
                        <p style={{ fontWeight: "700" }}>{el.secondETime}</p>
                        <p>PNQ {el.Spnrno}</p>
                      </div>
                    </div>
                  </div>

                  <div className="seeFlight">
                    <FontAwesomeIcon icon={faCalendarDay} />
                    <p>Included: carry-on bag, checked bag</p>
                    <b style={{ fontSize: "1.2rem" }}>INR23359.31</b>
                    <p>Total price for all travelers</p>
                    <Button
                      style={{
                        marginTop: "10px",
                        color: "#003580",
                        border: "1px solid #003580",
                        width: "200px",
                      }}
                      variant="outline"
                    >
                      See Flight
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Flex>
      </Box>

      <SmallFooter />
    </Box>
  );
};

export default FlightOptions;
