import getUser from '../../utils/getUser'

const apiGetUser = async (req, res) => {
  const data = await getUser('leonardocs1')
  res.send(data)
}

export default apiGetUser