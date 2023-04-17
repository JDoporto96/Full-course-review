import {
    fireEvent,
    getByTestId,
    render,
    screen,
    waitFor,
  } from "@testing-library/react";
import Gallery from "../../components/ex42/Gallery";


function Test_Component() {
    
    return (
      <Gallery url="http://localhost:5000/gallery" />
    );



}

test("First render loading and on load render the gallery with the navbar", async () => {
    const view = render(<Test_Component/>);
    const loading = screen.getByText('loading...')
    expect(loading).toBeTruthy();
    await waitFor(() => {
      const gallery = screen.getByTestId("gallery");
      return gallery;
    });
    const gallery = screen.getByTestId("gallery");
    const prevButton = screen.getByTestId("prevButton");
    const nextButton = screen.getByTestId("nextButton");

    expect(gallery).toBeTruthy();
    expect(prevButton).toBeTruthy();

    expect(nextButton).toBeTruthy();
})

test("on Next click first show loading, when loaded, show images", async () => {
    const view = render(<Test_Component/>);
    await waitFor(() => {
      const gallery = screen.getByTestId("gallery");
      return gallery;
    });
  
    const nextButton = screen.getByTestId("nextButton");
    expect(nextButton).toBeTruthy();

    nextButton.click();

    await waitFor(() => {
        const loading = screen.getByText('loading...')
        return loading
       
    });
    const loading = screen.getByText('loading...')
    expect(loading).toBeTruthy();

    await waitFor(() => {
        const gallery = screen.getByTestId("gallery");
        return gallery;
    });
    const gallery = screen.getByTestId("gallery");
    

    expect(gallery).toBeTruthy();
   

    
})

test("on Prev click first show loading, when loaded, show images", async () => {
    const view = render(<Test_Component/>);
    await waitFor(() => {
      const gallery = screen.getByTestId("gallery");
      return gallery;
    });
  
    const prevButton = screen.getByTestId("prevButton");
    expect(prevButton).toBeTruthy();

    prevButton.click();

    await waitFor(() => {
        const loading = screen.getByText('loading...')
        return loading
       
    });
    const loading = screen.getByText('loading...')
    expect(loading).toBeTruthy();

    await waitFor(() => {
        const gallery = screen.getByTestId("gallery");
        return gallery;
    });
    const gallery = screen.getByTestId("gallery");
    

    expect(gallery).toBeTruthy();
   

    
})

