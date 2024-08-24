import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"

export const useGetCallById = (id: String | String[]) => {
  const [call, setCall] = useState<Call>();
  const [isCallLoading, setIsCallLoading] = useState<boolean>(false);
  const client = useStreamVideoClient();

  useEffect(() => {
    if (!client) {
      return;
    }
    const loadCall = async () => {
      setIsCallLoading(true);
      const { calls } = await client.queryCalls({
        filter_conditions: {
          id
        }
      })
      if (calls.length > 0) {
        setCall(calls[0]);
      }
      setIsCallLoading(false);
    }
    loadCall();
  }, [client, id]);

  return { call, isCallLoading };
}