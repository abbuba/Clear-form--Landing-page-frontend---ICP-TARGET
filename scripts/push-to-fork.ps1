<#
.SYNOPSIS
  After you fork the repo on GitHub, run this to push your local main to your fork.

.DESCRIPTION
  1. Open https://github.com/CoderRahul01/Clear-form--Landing-page-frontend and click Fork (top right).
  2. From this repo root, run:
       .\scripts\push-to-fork.ps1 -ForkOwner YOUR_GITHUB_USERNAME

  3. On GitHub, open a Pull Request from your fork's main into the original repo's main.

.PARAMETER ForkOwner
  Your GitHub username (the account that owns the fork).
#>
param(
  [Parameter(Mandatory = $true)]
  [string]$ForkOwner,
  [string]$Repo = "Clear-form--Landing-page-frontend"
)

$ErrorActionPreference = "Stop"
$forkUrl = "https://github.com/$ForkOwner/$Repo.git"

Set-Location (Join-Path $PSScriptRoot "..")

if (-not (Test-Path .git)) {
  Write-Error "Run this from the repo root (parent of scripts/)."
}

$upstreamUrl = "https://github.com/CoderRahul01/$Repo.git"
$hasFork = git remote | Select-String -Pattern "^fork$" -Quiet
if (-not $hasFork) {
  git remote add fork $forkUrl
  Write-Host "Added remote 'fork' -> $forkUrl"
} else {
  git remote set-url fork $forkUrl
  Write-Host "Updated remote 'fork' -> $forkUrl"
}

$hasUpstream = git remote | Select-String -Pattern "^upstream$" -Quiet
if (-not $hasUpstream) {
  git remote add upstream $upstreamUrl
  Write-Host "Added remote 'upstream' (original) -> $upstreamUrl"
}

Write-Host "Pushing main to fork..."
git push -u fork main

Write-Host ""
Write-Host "Next: open https://github.com/CoderRahul01/$Repo/compare/main...${ForkOwner}:main"
Write-Host "      (GitHub may also show a 'Compare & pull request' banner on your fork.)"
