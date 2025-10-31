export async function GET() {
  try {
    const response = await fetch("https://whitney.org/api/exhibitions", {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      return Response.json(
        { error: 'Failed to fetch exhibitions from Whitney Museum' },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    return Response.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    });
  } catch (error) {
    console.error('Error fetching Whitney exhibitions:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

