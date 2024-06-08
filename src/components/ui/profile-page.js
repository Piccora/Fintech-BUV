export function profilepage () {}
return
<html lang="en">
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="profile-page.css"></link>
  <head>
    <title>Profile</title>
<body>
<div class="flex-container">
  <div>Name:
    Date of Birth:
    Telephone Number:
    Address

  </div>
  <div>
  <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Profile
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit Profile
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon />
          Settings
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Help
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          Log out
        </MenuItem>
      </StyledMenu>
    </div>
</div>
<h1>Analysis:</h1>
    <div class="flex-container">
        <div>
            <image src="link1" alt="name"></image>
        </div>
        <div>
            <image src="link2" alt="name"></image>
        </div>
    </div>

</body>
</head>
</html>