/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import { FavoriteToggle } from './FavoriteToggle';
import {
  createBaseThemeOptions,
  createUnifiedTheme,
  palettes,
} from '@backstage/theme';
import { ThemeProvider } from '@material-ui/core/styles';

export default {
  title: 'Core/FavoriteToggle',
  component: FavoriteToggle,
};

export const Default = () => {
  const [isFavorite, setFavorite] = React.useState(false);
  return (
    <FavoriteToggle
      id="favorite-toggle"
      title="Add entity to favorites"
      value={isFavorite}
      onChange={setFavorite}
    />
  );
};

const theme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: palettes.dark,
  }),
  components: {
    BackstageFavoriteToggle: {
      styleOverrides: {
        icon: () => ({ color: 'black' }),
      },
    },
  },
});

export const OverriddenToggleColor = () => {
  const [isFavorite, setFavorite] = React.useState(false);
  return (
    <ThemeProvider theme={theme}>
      <FavoriteToggle
        id="favorite-toggle"
        title="Add entity to favorites"
        value={isFavorite}
        onChange={setFavorite}
      />
    </ThemeProvider>
  );
};
