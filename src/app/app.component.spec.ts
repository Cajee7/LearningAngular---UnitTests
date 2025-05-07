import { AppComponent } from "./app.component";

describe('AppComponent', () => {
  it('has a title', () => {
    const component = new AppComponent();
    expect(component.title).toBeDefined();
  });
})