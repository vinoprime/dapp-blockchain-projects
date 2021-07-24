
module.exports = {
  networks: {
    development: {
      host: "192.168.43.4",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
