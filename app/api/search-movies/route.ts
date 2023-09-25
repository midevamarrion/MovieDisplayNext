import { MOVIE_ACCESS_TOKEN, MOVIE_BASE_URL } from "@/app/config";
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const { searchQuery } = req.query;

    if (!MOVIE_BASE_URL) {
      return new Response("Movie base URL not found", {
        status: 404,
      });
    }

    if (!MOVIE_ACCESS_TOKEN) {
      return new Response("Movie API token not found", {
        status: 400,
      });
    }

    try {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${MOVIE_ACCESS_TOKEN}`,
        },
      };

      const requestUrl = `${MOVIE_BASE_URL}/3/search/movie?query=${searchQuery}`;
      const requestResponse = await fetch(requestUrl, requestOptions);

      if (!requestResponse.ok) {
        throw new Error(`Request failed with status ${requestResponse.status}`);
      }

      const responseJson = await requestResponse.json();

      return new Response(JSON.stringify(responseJson), {
        status: 200,
        statusText: "Success",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error:any) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
