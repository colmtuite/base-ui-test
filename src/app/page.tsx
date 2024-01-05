import * as React from 'react';
import { Button } from '@mui/base/Button';
import { Switch } from '@mui/base/Switch';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import { MenuButton } from '@mui/base/MenuButton';
import { Dropdown } from '@mui/base/Dropdown';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { Slider } from '@mui/base/Slider';
import { Input } from '@mui/base/Input';

import { Select, selectClasses, SelectRootSlotProps } from '@mui/base/Select';
import { Option, optionClasses } from '@mui/base/Option';
import { useTheme } from '@mui/system';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';

export default function Home() {
  return (
    <main>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 40,
          width: 500,
          marginLeft: 'auto',
          marginRight: 'auto',
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
        <Input
          slotProps={{
            root: { className: 'TextFieldRoot' },
            input: { className: 'TextFieldInput' }
          }}
          placeholder="Type something"
        />

        <Select
          className="Select"
          slots={{
            root: Button,
          }}
          slotProps={{
            listbox: { className: 'SelectListbox' },
            popper: { className: 'SelectPopper' },
          }}
          defaultValue={10}
        >
          <Option className="SelectOption" value={10}>
            Documentation
          </Option>
          <Option className="SelectOption" value={20}>
            Components
          </Option>
          <Option className="SelectOption" value={30}>
            Features
          </Option>
        </Select>

        <TextareaAutosize
          className="Textarea"
          placeholder="Auto-resizing textarea"
        />
        <Slider
          defaultValue={[20, 37]}
          step={10}
          slotProps={{
            root: { className: 'Slider' },
            rail: { className: 'SliderRail' },
            track: { className: 'SliderTrack' },
            thumb: { className: 'SliderThumb', tabIndex: 0 },
          }}
        />
      </div>
    </main>
  )
}
