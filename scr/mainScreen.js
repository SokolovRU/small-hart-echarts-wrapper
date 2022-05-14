//
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { ECharts } from "react-native-echarts-wrapper";

export default function MainScreen() {
  return (
    <View style={styles.chartContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <View
          style={{ flexDirection: "row", marginLeft: 20, alignItems: "center" }}
        >
          <TouchableOpacity>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#000",
                borderRadius: 5,
                paddingTop: 5,
                paddingBottom: 5,
                padding: 10,
                elevation: 5,
                backgroundColor: "#FFF",
              }}
            >
              <Text>Today</Text>
            </View>
          </TouchableOpacity>
          <View style={{ marginLeft: 20 }}>
            <Text>Compared to May 12, 2022</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={{fontSize: 20}}>?</Text>
          </View>
          <View>
            <Text style={{fontSize: 20, marginLeft: 10, marginRight: 20}}>?</Text>
          </View>
        </View>
      </View>
      <MeChart />
    </View>
  );
}

const styles = StyleSheet.create({
  chartContainer: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    marginTop: 30,
  },
});

const MeChart = () => {
  return (
    <ECharts
      option={{
        tooltip: {
          trigger: "none",
          axisPointer: {
            type: "cross",
          },
        },
        legend: {},
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: "#5470C6",
              },
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return (
                    "Precipitation  " +
                    params.value +
                    (params.seriesData.length
                      ? "：" + params.seriesData[0].data
                      : "")
                  );
                },
              },
            },
            data: [
              "0h",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "22",
              "23h",
            ],
            boundaryGap: false,
          },
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: "#5470C6",
              },
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return (
                    "Precipitation  " +
                    params.value +
                    (params.seriesData.length
                      ? "：" + params.seriesData[0].data
                      : "")
                  );
                },
              },
            },
            // prettier-ignore
            data: [                  "0h",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                  "15",
                  "16",
                  "17",
                  "18",
                  "19",
                  "20",
                  "21",
                  "22",
                  "22",
                  "23h",],
          },
        ],
        yAxis: {
          type: "value",
        },

        series: [
          {
            name: "Orders1",
            type: "line",
            smooth: true,
            emphasis: {
              focus: "series",
            },
            data: [
              0, 0, 0, 0, 0, 0, 10, 20, 25, 22, 30, 48, 56, 36, 30, 20, 15, 5,
              0, 0, 0, 0, 0, 0, 0,
            ],
            color: "#3988dc",
          },
          {
            name: "Orders2",
            smooth: true,
            emphasis: {
              focus: "series",
            },
            data: [
              0, 0, 0, 0, 0, 0, 0, 25, 35, 22, 35, 50, 56, 40, 32, 21, 10, 5, 7,
              3, 0, 0, 0, 0, 0,
            ],
            color: '#b6b6b6',
            type: "line",
          },
          {
            name: "conversion1",
            color: '#badcff',
            data: [
              0, 0, 0, 0, 0, 0, 10, 20, 25, 22, 30, 48, 56, 36, 30, 20, 15, 5,
              0, 0, 0, 0, 0, 0, 0,
            ],
            type: "bar",
            markArea: {
              itemStyle: {
                color: "rgba(206,232,214, 0.3)",
              },
              data: [
                [
                  {
                    xAxis: "8",
                  },
                  {
                    xAxis: "12",
                  },
                ],
                [
                  {
                    xAxis: "14",
                  },
                  {
                    xAxis: "16",
                  },
                ],
              ],
            },
          },
          {
            name: "conversion2",
            color: '#e3e3e3',
            data: [
              0, 0, 0, 0, 0, 0, 0, 25, 35, 22, 35, 50, 56, 40, 32, 21, 10, 5, 7,
              3, 0, 0, 0, 0, 0,
            ],
            type: "bar",
          },
        ],
      }}
    />
  );
};
