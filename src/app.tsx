import DecimalToSexagesimal from './components/DecimalToSexagesimal';
import SexagesimalToDecimal from './components/SexagesimalToDecimal';

export function App() {
  const personalLink = 'https://alrico.es';
  const repoLink = 'https://github.com/alrico88/coorder';

  return (
    <div class="d-flex flex-column h-100">
      <main class="flex-shrink-0">
        <div class="header-bg">
          <div class="container py-md-2">
            <div class="row text-md-center py-md-5 py-2">
              <div class="col">
                <h1 class="mb-0 fw-bold">Coordinates Converter 🗺️</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row row-cols-md-2 row-cols-1 pb-4">
            <SexagesimalToDecimal />
            <DecimalToSexagesimal />
          </div>
        </div>
      </main>
      <footer class="mt-auto py-3 bg-light text-center">
        <div>
          Made by{' '}
          <a href={personalLink} target="_blank">
            Alberto Rico
          </a>
          . Source code available at{' '}
          <a href={repoLink} target="_blank">
            Github
          </a>
        </div>
      </footer>
    </div>
  );
}
