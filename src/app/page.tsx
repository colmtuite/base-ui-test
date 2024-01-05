import * as React from 'react';
import { Button } from '@mui/base/Button';
import { Switch } from '@mui/base/Switch';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import { MenuButton } from '@mui/base/MenuButton';
import { Dropdown } from '@mui/base/Dropdown';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { Slider } from '@mui/base/Slider';

export default function Home() {
  return (
    <main>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 40,
        }}>
        <Button
          slotProps={{
            root: { className: 'Button' },
          }}
        >
          Button
        </Button>
        <Switch
          slotProps={{
            root: { className: 'SwitchRoot' },
            input: { className: 'SwitchInput' },
            thumb: { className: 'SwitchThumb' },
            track: { className: 'SwitchTrack' },
          }}
        />
        <Dropdown>
          <MenuButton className="Button">Dropdown</MenuButton>

          <Menu
            className="CustomMenuIntroduction"
            slotProps={{
              listbox: { className: 'DropdownMenu-listbox' },
            }}
          >
            <MenuItem
              className="DropdownMenu-item"
            >
              Profile
            </MenuItem>
            <MenuItem
              className="DropdownMenu-item"
            >
              Language settings
            </MenuItem>
            <MenuItem
              className="DropdownMenu-item"
            >
              Log out
            </MenuItem>
            <MenuItem
              className="DropdownMenu-item"
            >
              Profile
            </MenuItem>
            <MenuItem
              className="DropdownMenu-item"
            >
              Language settings
            </MenuItem>
            <MenuItem
              className="DropdownMenu-item"
            >
              Log out
            </MenuItem>
          </Menu>
        </Dropdown>
        <TextareaAutosize
          className="Textarea"
          placeholder="Auto-resizing textarea"
        />
        <Slider
          slotProps={{
            root: { className: 'Slider' },
            rail: { className: 'SliderRail' },
            track: { className: 'SliderTrack' },
            thumb: { className: 'SliderThumb', tabIndex: 0 },
          }}
          defaultValue={50}
        />
      </div>
    </main>
  )
}
