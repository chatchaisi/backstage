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
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { Theme, makeStyles } from '@material-ui/core/styles';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles<Theme>(
  _theme => ({
    icon: {
      color: '#f3ba37',
      cursor: 'pointer',
    },
  }),
  { name: 'BackstageFavoriteToggle' },
);

export type FavoriteToggleClassKey = 'icon';

export type FavoriteToggleProps = {
  id: string;
  title: string;
  value: boolean;
  onChange: (value: boolean) => void;
};

function InternalFavoriteToggle({
  id,
  title,
  value,
  onChange,
}: FavoriteToggleProps) {
  const classes = useStyles();

  return (
    <IconButton
      aria-label={title}
      id={id}
      className={classes.icon}
      onClick={() => onChange(!value)}
    >
      <Tooltip id={id} title={title}>
        {value ? <Star /> : <StarBorder />}
      </Tooltip>
    </IconButton>
  );
}

/**
 * Toggle encapsulating logic for marking something as favorite,
 * primarily used in various instances of entity lists and cards but can be used elsewhere.
 *
 * This component can only be used in as a controlled toggle and does not keep internal state.
 *
 * @public
 */
export const FavoriteToggle = React.forwardRef<any, FavoriteToggleProps>(
  InternalFavoriteToggle,
);
