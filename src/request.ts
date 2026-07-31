import { ApiResponse, ColorItem, StateUpdate } from "./types";

interface ColorApiScheme {
  colors: Array<{
    hex: { clean: string };
    name: { value: string };
  }>;
}

const randomHex = (): string =>
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");

const request = (
  page: number,
  handleStateUpdate: (state: StateUpdate) => void,
): void => {
  const seed = randomHex();
  fetch(`/api/scheme?hex=${seed}&mode=analogic&count=20&format=json`)
    .then((res) => res.json())
    .then((scheme: ColorApiScheme) => {
      const data: ApiResponse = {
        data: scheme.colors.map(
          (c, i): ColorItem => ({
            id: i,
            color: `#${c.hex.clean}`,
            name: c.name.value,
          }),
        ),
        page,
      };
      handleStateUpdate({ isFetching: false, data });
    });
};

export default request;
