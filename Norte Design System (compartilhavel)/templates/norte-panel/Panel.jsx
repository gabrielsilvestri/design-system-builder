/* global React */
// Norte · painel do casal — template screen. Reads the DS namespace at render
// time so it works no matter when ds-base.js finishes loading the bundle.
function Panel() {
  const NS = window.NorteDesignSystem_23eb33;
  const [, force] = React.useState(0);
  React.useEffect(() => {
    if (NS) return;
    const t = setInterval(() => {
      if (window.NorteDesignSystem_23eb33) { clearInterval(t); force((n) => n + 1); }
    }, 60);
    return () => clearInterval(t);
  }, [NS]);

  if (!NS) {
    return (
      <div style={{ minHeight: "100vh", display: "grid", placeItems: "center",
        fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}>carregando sistema…</div>
    );
  }

  const { Surface, Hud, Card, Value, Sub, Rows, Row, Group, Meter, Split, Crown, Tile, Chip } = NS;

  const shield = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-3.5 7-9V6l-7-3-7 3v6c0 5.5 7 9 7 9z" />
    </svg>
  );
  const paw = (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <ellipse cx="12" cy="15.5" rx="3.4" ry="2.7" /><circle cx="7.3" cy="11.2" r="1.5" />
      <circle cx="16.7" cy="11.2" r="1.5" /><circle cx="9.7" cy="8" r="1.4" /><circle cx="14.3" cy="8" r="1.4" />
    </svg>
  );
  const plane = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12l18-8-8 18-2-8-8-2z" />
    </svg>
  );
  const house = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11l8-7 8 7M6 10v9h12v-9" />
    </svg>
  );

  const GOALS = [
    { id: "reserva", icon: shield, name: "Reserva de emergência", goal: "R$ 10.000", progress: 0, sub: "guardado R$ 0" },
    { id: "pet", icon: paw, name: "Arranhador do pet", goal: "R$ 3.000", progress: 0, sub: "guardado R$ 0" },
    { id: "viagem", icon: plane, name: "Viagem do casal", goal: "R$ 8.000", progress: 0, sub: "guardado R$ 0" },
    { id: "casa", icon: house, name: "Entrada do apê", goal: "R$ 40.000", progress: 0, sub: "guardado R$ 0" },
  ];

  function PanelInner() {
    const [active, setActive] = React.useState("reserva");
    return (
      <Surface style={{ minHeight: "100vh", padding: 24 }}>
        <div style={{ display: "grid", gap: "var(--p-sp-3)", maxWidth: 1280, margin: "0 auto",
          gridTemplateColumns: ".9fr 1.1fr 1.05fr",
          gridTemplateAreas: '"hud hud hud" "sal pag tnk" "sal cst qfz" "div cst obj" "div cst obj" "mes mes mes"' }}>
          <div style={{ gridArea: "hud" }}><Hud session="Pessoa A × Pessoa B" sync="OK" /></div>

          <Card title="Saldo em conta" seal="残高" tick style={{ gridArea: "sal" }}>
            <Value prefix="R$ " cents=",00" variant="positive">12.000</Value>
            <Sub>o que temos agora · fech 30/06</Sub>
            <Rows>
              <Row k="Conta Pessoa A" v="R$ 8.000,00" variant="accent" />
              <Row k="Conta Pessoa B" v="R$ 4.000,00" variant="accent2" />
            </Rows>
          </Card>

          <Card title="Contas a pagar" seal="支払" style={{ gridArea: "pag" }}>
            <Value prefix="R$ ">2.000</Value>
            <Sub>vence nos próximos 7 dias</Sub>
            <Rows>
              <Row k="Cartão Pessoa A" sub="venc 10/07" v="R$ 1.000" />
              <Row k="Cartão Pessoa B" sub="venc 15/07" v="R$ 800" />
              <Row k="Internet" sub="venc 20/07" v="R$ 200" variant="soft" />
            </Rows>
          </Card>

          <Card title="Tanque" seal="燃料" code="FUEL" style={{ gridArea: "tnk" }}>
            <Value variant="attention" prefix="R$ " style={{ marginBottom: 10 }}>8.000</Value>
            <Meter value={55} />
            <Sub>já entraram R$ 10.000 · 55% · meta R$ 18.000</Sub>
          </Card>

          <Card title="Custo de vida" seal="生活費" style={{ gridArea: "cst" }}>
            <Value prefix="R$ ">14.700</Value>
            <Sub>o que a vida custou este mês</Sub>
            <Group label="Fixos" total="R$ 5.700" />
            <Rows>
              <Row k="Aluguel" v="R$ 4.000" />
              <Row k="Luz" v="R$ 500" />
              <Row k="Condomínio" v="R$ 600" />
              <Row k="Internet" v="R$ 200" variant="soft" />
              <Row k="Pet (ração + areia)" v="R$ 400" />
            </Rows>
            <Group label="Variáveis" total="R$ 9.000" />
            <Rows>
              <Row k="Mercado" v="R$ 4.000" />
              <Row k="Restaurantes" v="R$ 2.000" />
              <Row k="Transporte" v="R$ 1.000" variant="soft" />
              <Row k="Lazer" v="R$ 2.000" />
            </Rows>
          </Card>

          <Card title="Quem fez" seal="収入" style={{ gridArea: "qfz" }}>
            <Rows style={{ marginTop: 0 }}>
              <Row k="Pessoa A" v="R$ 12.000" variant="accent" />
              <Row k="Pessoa B" v={<>R$ 12.000 <Crown /></>} variant="accent2" />
            </Rows>
            <Split a={50} style={{ marginTop: 12 }} />
            <Sub>receita combinada R$ 24.000 · quase empatados</Sub>
          </Card>

          <Card title="Dívidas" seal="負債" style={{ gridArea: "div" }}>
            <Value variant="attention" prefix="R$ ">6.500</Value>
            <Sub>separado do gasto do mês</Sub>
            <Rows>
              <Row k="Financiamento do carro" sub="18 de 36 parcelas" v="R$ 5.000" variant="accent2" />
              <Row k="Parcelado geladeira" sub="3 de 10 parcelas" v="R$ 1.500" variant="accent2" />
            </Rows>
          </Card>

          <Card title="Objetivos" seal="目標" style={{ gridArea: "obj" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 4 }}>
              {GOALS.map((g) => (
                <Tile key={g.id} icon={g.icon} name={g.name} goal={g.goal} progress={g.progress}
                  sub={g.sub} active={active === g.id} onClick={() => setActive(g.id)} style={{ cursor: "pointer" }} />
              ))}
            </div>
            <Sub style={{ marginTop: 10 }}>toque pra definir a meta ativa do mês</Sub>
          </Card>

          <Card title="Histórico mensal" seal="月次" code="2026" style={{ gridArea: "mes" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 9 }}>
              <Chip month="jan" value="−2.000" variant="down" />
              <Chip month="fev" value="−1.500" variant="down" />
              <Chip month="mar" value="+3.000" variant="up" />
              <Chip month="abr" value="−1.000" variant="down" />
              <Chip month="mai" value="−2.500" variant="down" />
              <Chip month="jun" value="·····" variant="now" />
            </div>
          </Card>
        </div>
      </Surface>
    );
  }

  return <PanelInner />;
}

window.Panel = Panel;
