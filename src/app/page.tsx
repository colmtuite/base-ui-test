import * as React from 'react';
import { Button } from '@mui/base/Button';
import { Switch } from '@mui/base/Switch';

export default function Home() {
  return (
    <main>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 40,
        }}>
        <Button>Create Repository</Button>
        <Switch
          slotProps={{
            root: { className: 'SwitchRoot' },
            input: { className: 'SwitchInput' },
            thumb: { className: 'SwitchThumb' },
            track: { className: 'SwitchTrack' },
          }}
        />
      </div>
    </main>
  )
}
