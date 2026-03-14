import { ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { List, TextInput, Text, Button } from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Alumnos() {

  const [alumnos, setAlumnos] = useState([]);
  const [buscaAlumno, setBuscaAlumno] = useState('');
  const [expandido, setExpandido] = useState(null);
  const [orden, setOrden] = useState(null);

  const alumnosFiltrados = alumnos.filter((alumno) =>
    alumno.nombre.toLowerCase().includes(buscaAlumno.toLowerCase()) ||
    alumno.matricula.includes(buscaAlumno)
  );

  const [ordenar, setOrdenar] = useState('apellido')
    const alumnosOrdenados = alumnos
          .filter((alumnos) => alumnos.nombre.toLowerCase().includes(buscaAlumno.toLowerCase()) || alumnos.matricula.includes(buscaAlumno))
          .sort((alumnos, b) => {
              if (ordenar === 'nombre') {
                  return alumnos.nombre.split(' ').at(2).localeCompare(b.nombre.split(' ').at(2));
              } else {
                  return alumnos.nombre.split(' ')[0].localeCompare(b.nombre.split(' ')[0]);
              }
          });


  useEffect(() => {
    setTimeout(() => {
      setAlumnos([
        { nombre: 'CANDELARIA MORA SAMANTHA', matricula: '2114354' },
        { nombre: 'CANTU SILVA JAVIER', matricula: '2111889' },
        { nombre: 'CARMONA LOZANO ANGEL EMILIANO', matricula: '2069119' },
        { nombre: 'CASTILLO ACOSTA JORGE', matricula: '2132842' },
        { nombre: 'DAVILA GONZALEZ ALDO ADRIAN', matricula: '1994122' },
        { nombre: 'DURAN BARRIENTOS FABRIZIO', matricula: '2018230' },
        { nombre: 'FLORES GONZALEZ SEBASTIAN', matricula: '2104564' },
        { nombre: 'FLORES LÓPEZ DIEGO', matricula: '2066033' },
        { nombre: 'FLORES MARTINEZ ERICK ADRIAN', matricula: '2132976' },
        { nombre: 'GARZA AVALOS DIEGO', matricula: '2066114' },
        { nombre: 'GONZALEZ OVALLE CHRISTIAN GABRIEL', matricula: '2031243' },
        { nombre: 'MARTINEZ ELIAS ANGEL SEBASTIAN', matricula: '2064733' },
        { nombre: 'MENDIETA GONZALEZ ESMERALDA GABRIELA', matricula: '2094647' },
        { nombre: 'MIRELES VELAZQUEZ ALEJANDRO', matricula: '2005102' },
        { nombre: 'MONSIVAIS SALAZAR ANDRES', matricula: '2064574' },
        { nombre: 'PARRAZALEZ VALDESPINO MARTHA JULIETA', matricula: '2024783' },
        { nombre: 'PEÑA MUNGARRO LUIS ANGEL', matricula: '2066077' },
        { nombre: 'PUENTE REYNOSO JULIO CESAR', matricula: '2092151' },
        { nombre: 'RAMIREZ LOPEZ BRYAN', matricula: '2103708' },
        { nombre: 'RAMOS AVILA LILIANA VALERIA', matricula: '2115192' },
        { nombre: 'RICO JAUREGUI MAURICIO', matricula: '2037503' },
        { nombre: 'RIVERA LUNA ADRIAN', matricula: '2131513' },
        { nombre: 'RODRIGUEZ OLVERA ROSA ISELA', matricula: '2004613' },
        { nombre: 'RODRIGUEZ RODRIGUEZ ANGEL AZAEL', matricula: '2133022' },
        { nombre: 'SANCHEZ GALARZA JUAN CARLOS', matricula: '2026061' },
        { nombre: 'SOLIS ORTIZ ALFREDO', matricula: '2095320' },
        { nombre: 'VELAZQUEZ ABREGO HERWIN DANIEL', matricula: '2025350' },
        { nombre: 'VILLAGRA RODRIGUEZ ANDRES NEHUEL', matricula: '2103895' },
        { nombre: 'ZACATENCO OLIVE RODRIGO', matricula: '1857791' },
        { nombre: 'ZAVALA CANTU TERESA MARGARITA', matricula: '2025218' },
      ]);
    }, 2000);
  }, []);

  if (!alumnos.length) {
    return <Text>Cargando alumnos...</Text>;
  }

  return (
    <>
      <TextInput
        label="Buscar alumno..."
        value={buscaAlumno}
        onChangeText={setBuscaAlumno}
        right={<TextInput.Icon icon="magnify" />}
      />

      <List.Section title="">
                <List.Accordion
                    title="Ordenar"
                    left={props => <List.Icon {...props} icon="sort" />}>
                    <List.Item
                        title="Por Nombre"
                        left={props => <List.Icon {...props} icon="sort-alphabetical-ascending" />}
                        onPress={() => setOrdenar('nombre')}/>
                    <List.Item
                        title="Por Apellido"
                        left={props => <List.Icon {...props} icon="sort-alphabetical-ascending" />}
                        onPress={() => setOrdenar('apellido')}/>
                </List.Accordion>
            </List.Section>

      <ScrollView>
        <List.Section title="Alumnos">
          {alumnosOrdenados.map((alumno) => (
            <List.Accordion
              key={alumno.matricula}
              title={alumno.nombre}
              left={() => <MaterialIcons name="account-circle" size={40} />}
              expanded={expandido === alumno.matricula}
              onPress={() => setExpandido(expandido === alumno.matricula ? null : alumno.matricula)}
            >
              <List.Item
                title="Matrícula"
                description={alumno.matricula}
                left={props => <List.Icon {...props} icon="card-account-details" />}
              />
            </List.Accordion>
          ))}
        </List.Section>
      </ScrollView>
    </>
  );
}