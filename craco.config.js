module.exports = {
  webpack: {
    configure: {
      ignoreWarnings: [
        function ignoreSourcemapsloaderWarnings(warning) {
          return (
            warning.module &&
            warning.module.resource.includes("@mediapipe/tasks-vision") &&
            warning.details &&
            warning.details.includes("source-map-loader")
          );
        },
      ],
      output: {
        publicPath: "",
      },
    },
  },
};
