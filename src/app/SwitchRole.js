import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import React, { Component } from 'react';

const SwitchRole = () => (
  <IconMenu icon='more_vert' position='topLeft' menuRipple>
    <MenuItem value='Organizer' icon='get_app' caption='Organizer' />
    <MenuItem value='Presenter' icon='favorite' caption='Presenter' />
    <MenuItem value='Audience' icon='open_in_browser' caption='Audience' />
    <MenuDivider />
    <MenuItem value='Logout' icon='delete' caption='Logout'  />
  </IconMenu>
);

export default SwitchRole;
