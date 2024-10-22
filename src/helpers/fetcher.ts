import axios from 'axios';

export const fetcher = async (urlOrigin: string, { arg }: { arg: string }): Promise<string | undefined> => {
  try {
    const resp = await axios.get(urlOrigin, { params: { url: arg } })
    return resp.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data)
      }
      throw new Error(error.message)
    }
  }

}